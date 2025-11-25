async function loadAchievements() {
    try {
        // Загружаем данные об достижениях
        let response = await fetch("achievements.json")
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        let achievements = await response.json()
        
        console.log("Загружены достижения:", achievements)

        // Получаем контейнер для вставки
        let container = document.getElementById("achievements_container")
        if (!container) {
            throw new Error("Элемент achievements_container не найден")
        }
        
        // Создаем список достижений
        let listHTML = `<ul class="achievements-list">`

        // Добавляем элементы для каждого достижения
        achievements.forEach(achievement => {
            listHTML += `
                <li class="achievement-item">
                    <div class="achievement-content">
                        <h4 class="achievement-title">${achievement.title}</h4>
                        <p class="achievement-description">${achievement.description}</p>
                        <p class="achievement-value">${achievement.value}</p>
                        <img class="achievement-icon" src="${achievement.icon}" alt="achievement-title">
                    </div>
                </li>
            `
        })

        listHTML += `</ul>`

        // Вставляем список в контейнер
        container.innerHTML = listHTML

    } catch (error) {
        console.error("Ошибка загрузки достижений:", error)
        document.getElementById("achievements_container").innerHTML = 
            "<p>Не удалось загрузить данные о достижениях</p>"
    }
}

// Запускаем загрузку при загрузке страницы
document.addEventListener('DOMContentLoaded', loadAchievements)