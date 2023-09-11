
    const paths = document.querySelectorAll('path');
    const textElement = document.getElementById('country_name');
   let selected_country
    document.addEventListener('mousemove', event => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const distances = [];
      paths.forEach(path => {
         path.style.fill = '#fff';
      })
      paths.forEach(path => {
        const pathBoundingBox = path.getBoundingClientRect();
        const pathX = pathBoundingBox.left + pathBoundingBox.width / 2;
        const pathY = pathBoundingBox.top + pathBoundingBox.height / 2;
        const distance = Math.sqrt((pathX - mouseX) ** 2 + (pathY - mouseY) ** 2);
        distances.push({ path, distance });
      });

      distances.sort((a, b) => a.distance - b.distance);
      const nearestPath = distances[0].path;
      console.log(distances[0].distance)
      if(distances[0].distance<40){
         console.log("hellow")
         textElement.style.display = "block";
         textElement.setAttribute('fill', 'black');
         textElement.setAttribute('font-size', '1.5rem');
         const nearestPathBoundingBox = nearestPath.getBoundingClientRect();
         const nearestPathCenterX = nearestPathBoundingBox.left + nearestPathBoundingBox.width / 2;
         const nearestPathCenterY = nearestPathBoundingBox.top + nearestPathBoundingBox.height / 2;
         let country_name = nearestPath.classList[0];
         textElement.innerHTML = country_name;
         textElement.style.display = "block";
         textElement.style.left = `${nearestPathCenterX}px`;
         textElement.style.top = `${nearestPathCenterY}px`;
         nearestPath.style.fill = 'red';
         
      }
      else{
         textElement.style.display = "none";
      }
    });



