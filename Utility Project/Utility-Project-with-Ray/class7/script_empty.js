    // Select all the filters
    const colorFilter = document.getElementById('color-filter');// dropdownFilter
    const sizeFilter = document.querySelectorAll('input[name="size"]'); // Radio Button Filter
    const typeFilters = document.querySelectorAll('input[type="checkbox"]'); // Checkbox Filter
    const filterButtons = document.querySelectorAll('.price-btn'); // Price Button

    
   const colorFilter = document.getElementById("color-filter");// dropdownFilter
    // Radio Button Filter
    // Checkbox Filter
    // Price Button

    // select the item elements
    const items = document.querySelectorAll('.item');

    // filter by color (Dropdown)
    function filterByColor(){
    // get the color values
    const selectedColor = colorFilter.value;
    // loop through each element
    items.forEach(item => {
          const color = item.dataset.color;
          if(color == selectedColor || selectedColor ==='all') {
            item.style.display = 'block';

          } else {
            item.style.display = 'none';

          }
    })
}
    // get the color property of the element
  
        // if all is selected or if the value of the filter matches the item, display block (visible)
       
    
        // else display none (hidden)




    // filter by size (radio buttons)
      function filterBySize(){


    // get the radio button values
    const selectedSize = document.querySelector('input[name="size"]:checked').value;
    // loop through each element
         items.forEach(item => {
            const size = item.dataset.size;
         })
        // get the size property of the element
           
        // if all is selected or if the value of the filter matches the item, display block (visible)
        if (selectedSize === 'all' || size === selectedSize){
            item.style.display = 'block' 
          }
        // else display none (hidden)
        else {
            item.style.display = 'none' 
          }
          
    }
    // filter by type (checkbox)
    function filterByType(filterValue) {}
     // get checkbox values, put in array
     const selectedTypes = document.querySelectorAll('input[type="checkbox"]:checked');
     const selectedTypeValues = Array.from(selectedTypes).map(checkbox => checkbox.value);
    // loop through each element
    items.forEach(item => {

        // get the type property of the element
        const type = item.dataset.type;
        // if there are no boxes selected or the type of the element is in the array, display block (visible)
         if(selectedTypes.length === 0 || selectedTypeValues.includes(type)){
            item.style.display = 'block';
         } else{
            item.style.display = 'none';
         }
        // else display none (hidden)
   
    });

    // filter by price (Button)
    function filterByButton(filterValue){
   
    // loop through each element
       items.forEach(items =>{
        // get the price property of the element

        // if all is selected or if the value of the filter matches the item, display block (visible)

        // else display none (hidden)

    })
}
 
    

    //Add event listeners for each filter
    colorFilter.addEventListener('change', filterByColor);
    sizeFilter.forEach(radio => radio.addEventListener('change', filterBySize));
    typeFilters.forEach(checkbox => checkbox.addEventListener('change', filterByType));
    filterButtons.forEach(btn => btn.addEventListener('click', function() {
    });
    filterByButton(btn.getAttribute('data-price'));
