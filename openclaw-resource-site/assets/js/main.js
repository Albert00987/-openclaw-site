// 移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
        // 点击导航链接后关闭菜单
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }
});

// 复制代码功能
function copyCode(btn) {
    const codeBlock = btn.parentElement;
    const code = codeBlock.querySelector('code');
    if (!code) return;
    
    const text = code.textContent || code.innerText;
    navigator.clipboard.writeText(text).then(() => {
        const origText = btn.textContent;
        btn.textContent = '✅ 已复制';
        btn.style.background = '#2ecc71';
        setTimeout(() => {
            btn.textContent = origText;
            btn.style.background = '';
        }, 2000);
    }).catch(() => {
        // 降级方案
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        btn.textContent = '✅ 已复制';
        setTimeout(() => { btn.textContent = '📋 复制'; }, 2000);
    });
}
