document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle');
    const prices = document.querySelectorAll('.price');
  
    toggle.addEventListener('change', function () {
      const isYearly = toggle.checked;
  
      prices.forEach(price => {
        const monthlyPrice = price.getAttribute('data-monthly');
        const yearlyPrice = price.getAttribute('data-yearly');
  
        price.textContent = isYearly ? `Yearly: ${yearlyPrice}` : `Monthly: ${monthlyPrice}`;
      });
    });
  });
  