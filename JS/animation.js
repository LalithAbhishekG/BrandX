 // Select the elements you want to animate
 const elements = document.querySelectorAll('.fade-in-up');
  
 // Define the options for the IntersectionObserver
 const options = {
   root: null, // viewport
   threshold: 0.1 // when 10% of the element is visible
 };

 // Create the IntersectionObserver instance
 const observer = new IntersectionObserver((entries, observer) => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       // Add the animation class when the element comes into view
       entry.target.classList.add('animate__fadeInUp');
       // Optionally, stop observing after the animation has been applied
       observer.unobserve(entry.target);
     }
   });
 }, options);

 // Observe each element
 elements.forEach(element => {
   observer.observe(element);
 });