import { createHighlighterCore } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'

// 1. 显式导入语法和主题
import langJs from 'shiki/langs/javascript'
import langHtml from 'shiki/langs/html'
import langCss from 'shiki/langs/css'
import langVue from 'shiki/langs/vue'
import langBash from 'shiki/langs/bash'
import oneDarkPro from 'shiki/themes/one-dark-pro'

let highlighterPromise = null

async function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      themes: [oneDarkPro],
      langs: [langJs, langHtml, langCss, langVue, langBash], // 核心：显式传入对象
      engine: createJavaScriptRegexEngine(),
    })
  }
  return highlighterPromise
}

export default {
  async install(app) {
    const highlighter = await getHighlighter()

    app.directive('highlight', {
      // 使用 mounted 保证只在挂载时处理一次，避免 replaceWith 导致的逻辑冲突
      async mounted(el) {
        await highlightElement(el, highlighter)
      },
      // 如果内容是动态的，可以使用 updated，但需要更精细的 DOM 对比
      async updated(el) {
        await highlightElement(el, highlighter)
      },
    })
  },
}

async function highlightElement(el, highlighter) {
  // 兼容 pre 或 pre code 的情况
  const blocks = el.querySelectorAll('pre')

  for (const block of blocks) {
    // 防止重复高亮
    if (block.dataset.highlighted) continue

    const codeEl = block.querySelector('code') || block
    const code = codeEl.textContent.trim()
    const lang = detectLanguage(codeEl)

    try {
      const html = highlighter.codeToHtml(code, {
        lang,
        theme: 'one-dark-pro',
      })

      // 优化：不直接 replaceWith，而是替换 innerHTML，保留原容器
      // 或者替换后标记已处理
      const wrapper = document.createElement('div')
      wrapper.innerHTML = html
      const highlightedNode = wrapper.firstChild

      block.replaceWith(highlightedNode)
      highlightedNode.dataset.highlighted = 'true'
    } catch (error) {
      console.error('Shiki Error:', error)
    }
  }
}

function detectLanguage(el) {
  const classes = Array.from(el.classList)
  const langClass = classes.find(c => c.startsWith('language-'))
  if (langClass) return langClass.replace('language-', '')

  // 兜底逻辑：如果是 vue 模板通常有 <template>
  if (el.textContent.includes('<template>')) return 'vue'
  return 'javascript'
}
