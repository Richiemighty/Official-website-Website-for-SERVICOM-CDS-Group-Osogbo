document.addEventListener('DOMContentLoaded', function () {
  fetch('current.json')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load current.json');
      return response.json();
    })
    .then(config => {
      const regime = config.activeRegime;
      const basePath = `archive/${regime}/`;

      // Load Executives
      fetch(`${basePath}exco.json`)
        .then(response => {
          if (!response.ok) throw new Error('Failed to load exco.json');
          return response.json();
        })
        .then(data => {
          // Update batch info
          document.getElementById('batch-info').textContent = `${data.batch} (${data.period})`;
          
          // Render executives
          let html = '';
          data.executives.forEach(ex => {
            html += `
              <div class="team-member">
                <img src="${basePath}${ex.image}" alt="${ex.name}">
                <h3>${ex.name}</h3>
                <p>${ex.position}</p>
                <div class="social-links">
                  <a href="${ex.whatsapp}" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            `;
          });
          document.getElementById('exco-cards').innerHTML = html;
        })
        .catch(err => {
          console.error("Exco load error:", err);
          document.getElementById('batch-info').textContent = "❌ Team unavailable";
          document.getElementById('exco-cards').innerHTML = '<p style="text-align:center;color:#e74c3c;">Team data not found</p>';
        });

      // Activities section can stay empty for now or show "Coming soon"
      document.getElementById('activity-cards').innerHTML = '<p style="text-align:center; color:#666;">Activities will be posted soon.</p>';
    })
    .catch(err => {
      console.error("System error:", err);
      document.getElementById('batch-info').textContent = "❌ System offline";
      document.getElementById('exco-cards').innerHTML = '<p style="text-align:center;color:#e74c3c;">Config error</p>';
    });
});