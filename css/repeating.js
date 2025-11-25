async function loadAchievements() {
    try {
        let response = await fetch("achievements.json")
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        let achievements = await response.json()
        
        console.log("Загружены достижения:", achievements)


        let container = document.getElementById("achievements_container")
        if (!container) {
            throw new Error("Элемент achievements_container не найден")
        }
        

        let tableHTML = `
            <table class="achievements-table">
                <thead>
                    <tr>
                        <th>Иконка</th>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Опыт</th>
                    </tr>
                </thead>
                <tbody>
        `


        achievements.forEach(achievement => {
            tableHTML += `
                <tr class="achievement-row">
                    <td class="achievement-icon-cell">
                        <img class="achievement-icon" src="${achievement.icon}" alt="${achievement.title}">
                    </td>
                    <td class="achievement-title-cell">${achievement.title}</td>
                    <td class="achievement-description-cell">${achievement.description}</td>
                    <td class="achievement-value-cell">${achievement.value}</td>
                </tr>
            `
        })

        tableHTML += `
                </tbody>
            </table>
        `


        container.innerHTML = tableHTML

    } catch (error) {
        console.error("Ошибка загрузки достижений:", error)
        document.getElementById("achievements_container").innerHTML = 
            "<p>Не удалось загрузить данные о достижениях</p>"
    }
}


document.addEventListener('DOMContentLoaded', loadAchievements)