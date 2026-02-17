// 模拟电子技术复习网站 - 交互功能

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('模电复习网站加载完成！');
    initializeWebsite();
});

// 初始化网站功能
function initializeWebsite() {
    // 添加平滑滚动效果
    addSmoothScroll();

    // 添加进度跟踪
    trackProgress();

    // 添加快捷键支持
    addKeyboardShortcuts();

    // 初始化习题功能
    initializeExercises();
}

// 显示/隐藏答案功能
function toggleAnswer(button) {
    const exerciseItem = button.closest('.exercise-item');
    const answer = exerciseItem.querySelector('.answer');

    if (answer.classList.contains('show')) {
        answer.classList.remove('show');
        button.textContent = '查看答案与解析';
        button.style.background = '#4caf50';
    } else {
        answer.classList.add('show');
        button.textContent = '隐藏答案';
        button.style.background = '#ff9800';

        // 平滑滚动到答案区域
        answer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// 平滑滚动效果
function addSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 进度跟踪功能
function trackProgress() {
    // 获取当前页面
    const currentPage = window.location.pathname.split('/').pop();

    // 保存到localStorage
    if (!localStorage.getItem('visitedPages')) {
        localStorage.setItem('visitedPages', JSON.stringify([]));
    }

    const visitedPages = JSON.parse(localStorage.getItem('visitedPages'));
    if (!visitedPages.includes(currentPage) && currentPage !== '') {
        visitedPages.push(currentPage);
        localStorage.setItem('visitedPages', JSON.stringify(visitedPages));
    }

    // 显示进度（如果有进度指示器的话）
    updateProgressIndicator();
}

// 更新进度指示器
function updateProgressIndicator() {
    const progressIndicator = document.querySelector('.progress-indicator');
    if (progressIndicator) {
        const visitedPages = JSON.parse(localStorage.getItem('visitedPages') || '[]');
        const totalPages = 7; // 首页 + 6章
        const progress = Math.min((visitedPages.length / totalPages) * 100, 100);

        const progressFill = progressIndicator.querySelector('.progress-fill');
        if (progressFill) {
            progressFill.style.width = progress + '%';
        }

        const progressText = progressIndicator.querySelector('p');
        if (progressText) {
            progressText.textContent = `学习进度：${Math.round(progress)}%（已访问 ${visitedPages.length}/${totalPages} 个章节）`;
        }
    }
}

// 快捷键支持
function addKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl + H: 返回首页
        if (e.ctrlKey && e.key === 'h') {
            e.preventDefault();
            window.location.href = 'index.html';
        }

        // Ctrl + E: 进入习题页面
        if (e.ctrlKey && e.key === 'e') {
            e.preventDefault();
            window.location.href = 'exercises.html';
        }

        // Ctrl + 数字: 跳转到对应章节
        if (e.ctrlKey && e.key >= '1' && e.key <= '6') {
            e.preventDefault();
            window.location.href = `chapter${e.key}.html`;
        }
    });
}

// 初始化习题功能
function initializeExercises() {
    // 为所有习题添加序号
    const exercises = document.querySelectorAll('.exercise-item');
    exercises.forEach((exercise, index) => {
        const titleElement = exercise.querySelector('h3');
        if (titleElement && !titleElement.textContent.includes('题目')) {
            titleElement.textContent = `题目 ${index + 1}：${titleElement.textContent}`;
        }
    });

    // 添加"显示所有答案"按钮
    addShowAllAnswersButton();

    // 添加习题完成度追踪
    trackExerciseCompletion();
}

// 添加"显示所有答案"按钮
function addShowAllAnswersButton() {
    const mainContent = document.querySelector('main .container');
    if (mainContent && document.querySelectorAll('.exercise-item').length > 0) {
        const buttonContainer = document.createElement('div');
        buttonContainer.style.textAlign = 'center';
        buttonContainer.style.margin = '30px 0';

        const showAllBtn = document.createElement('button');
        showAllBtn.textContent = '显示所有答案';
        showAllBtn.className = 'btn btn-primary';
        showAllBtn.style.marginRight = '10px';
        showAllBtn.onclick = showAllAnswers;

        const hideAllBtn = document.createElement('button');
        hideAllBtn.textContent = '隐藏所有答案';
        hideAllBtn.className = 'btn btn-secondary';
        hideAllBtn.onclick = hideAllAnswers;

        buttonContainer.appendChild(showAllBtn);
        buttonContainer.appendChild(hideAllBtn);

        // 插入到第一个习题之前
        const firstExercise = document.querySelector('.exercise-item');
        if (firstExercise) {
            firstExercise.parentNode.insertBefore(buttonContainer, firstExercise);
        }
    }
}

// 显示所有答案
function showAllAnswers() {
    const answers = document.querySelectorAll('.exercise-item .answer');
    const buttons = document.querySelectorAll('.show-answer-btn');

    answers.forEach(answer => answer.classList.add('show'));
    buttons.forEach(button => {
        button.textContent = '隐藏答案';
        button.style.background = '#ff9800';
    });
}

// 隐藏所有答案
function hideAllAnswers() {
    const answers = document.querySelectorAll('.exercise-item .answer');
    const buttons = document.querySelectorAll('.show-answer-btn');

    answers.forEach(answer => answer.classList.remove('show'));
    buttons.forEach(button => {
        button.textContent = '查看答案与解析';
        button.style.background = '#4caf50';
    });
}

// 追踪习题完成度
function trackExerciseCompletion() {
    const exercises = document.querySelectorAll('.exercise-item');
    if (exercises.length === 0) return;

    // 为每个习题添加"标记为已完成"复选框
    exercises.forEach((exercise, index) => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `exercise-${index}`;
        checkbox.style.marginRight = '10px';

        const label = document.createElement('label');
        label.htmlFor = `exercise-${index}`;
        label.textContent = '标记为已完成';
        label.style.fontSize = '0.9em';
        label.style.color = '#666';

        const checkboxContainer = document.createElement('div');
        checkboxContainer.style.marginTop = '10px';
        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(label);

        exercise.appendChild(checkboxContainer);

        // 从localStorage加载状态
        const completed = JSON.parse(localStorage.getItem('completedExercises') || '[]');
        if (completed.includes(index)) {
            checkbox.checked = true;
            exercise.style.opacity = '0.7';
        }

        // 监听变化
        checkbox.addEventListener('change', function() {
            updateExerciseCompletion(index, this.checked);
            if (this.checked) {
                exercise.style.opacity = '0.7';
            } else {
                exercise.style.opacity = '1';
            }
        });
    });

    // 显示完成度统计
    updateCompletionStats();
}

// 更新习题完成状态
function updateExerciseCompletion(index, completed) {
    let completedExercises = JSON.parse(localStorage.getItem('completedExercises') || '[]');

    if (completed) {
        if (!completedExercises.includes(index)) {
            completedExercises.push(index);
        }
    } else {
        completedExercises = completedExercises.filter(i => i !== index);
    }

    localStorage.setItem('completedExercises', JSON.stringify(completedExercises));
    updateCompletionStats();
}

// 更新完成度统计
function updateCompletionStats() {
    const totalExercises = document.querySelectorAll('.exercise-item').length;
    const completedExercises = JSON.parse(localStorage.getItem('completedExercises') || '[]').length;

    if (totalExercises > 0) {
        const statsDiv = document.querySelector('.completion-stats');
        if (!statsDiv) {
            const newStatsDiv = document.createElement('div');
            newStatsDiv.className = 'completion-stats';
            newStatsDiv.style.textAlign = 'center';
            newStatsDiv.style.padding = '20px';
            newStatsDiv.style.background = '#f8f9ff';
            newStatsDiv.style.borderRadius = '10px';
            newStatsDiv.style.margin = '20px 0';

            const welcomeSection = document.querySelector('.welcome-section');
            if (welcomeSection) {
                welcomeSection.appendChild(newStatsDiv);
            }
        }

        const stats = document.querySelector('.completion-stats');
        if (stats) {
            const percentage = Math.round((completedExercises / totalExercises) * 100);
            stats.innerHTML = `
                <h3>📊 练习完成度</h3>
                <p style="font-size: 2em; color: #667eea; margin: 10px 0;">
                    ${completedExercises} / ${totalExercises}
                </p>
                <p style="color: #666;">已完成 ${percentage}% 的习题</p>
                <div class="progress-bar" style="max-width: 400px; margin: 15px auto;">
                    <div class="progress-fill" style="width: ${percentage}%"></div>
                </div>
            `;
        }
    }
}

// 添加打印功能
function printPage() {
    window.print();
}

// 重置所有进度
function resetProgress() {
    if (confirm('确定要重置所有学习进度吗？此操作不可恢复！')) {
        localStorage.clear();
        alert('进度已重置！');
        location.reload();
    }
}

// 导出学习记录
function exportProgress() {
    const data = {
        visitedPages: JSON.parse(localStorage.getItem('visitedPages') || '[]'),
        completedExercises: JSON.parse(localStorage.getItem('completedExercises') || '[]'),
        exportDate: new Date().toISOString()
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = '模电学习进度_' + new Date().toLocaleDateString() + '.json';
    link.click();

    URL.revokeObjectURL(url);
}

// 添加页面滚动时的导航栏固定效果
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.main-nav');
    if (nav) {
        if (window.scrollY > 100) {
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        } else {
            nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    }
});

// 添加返回顶部按钮
function addBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #667eea;
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        transition: all 0.3s;
    `;

    button.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    document.body.appendChild(button);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
}

// 页面加载完成后添加返回顶部按钮
window.addEventListener('load', addBackToTopButton);

// 控制台输出欢迎信息
console.log('%c欢迎使用模拟电子技术复习网站！', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c祝你考试顺利，取得好成绩！', 'color: #4caf50; font-size: 16px;');
console.log('%c快捷键提示：', 'color: #ff9800; font-weight: bold;');
console.log('Ctrl + H: 返回首页');
console.log('Ctrl + E: 进入习题页面');
console.log('Ctrl + 1~6: 跳转到对应章节');
