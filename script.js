function subscribe(plan) {
  const status = document.getElementById('status');
  status.innerHTML = "Redirecting to secure payment for " + plan + "...";

  // Simulate redirect to payment gateway
  setTimeout(() => {
    window.location.href = "https://your-payment-gateway.com/checkout?plan=" + plan;
  }, 1500);
}