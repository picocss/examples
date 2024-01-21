// Initialize
let bitcoinPrice = 0;
let recommendedFees = {
  minimumFee: 20,
  economyFee: 40,
  hourFee: 60,
  halfHourFee: 70,
  fastestFee: 80,
};
const transactionSizeInBytes = 400;

// Form targets
const form = document.querySelector("form");
const addressInput = form.querySelector("#address");
const amountInput = form.querySelector("#amount");
const priorityInput = form.querySelector("#priority");
const priorityOptions = form.querySelectorAll("#priorities option");

// Amounts targets
const table = form.querySelector("table");
const amountUsd = form.querySelector("#amount-usd");
const transactionFeesBtc = table.querySelector("#transaction-fees-btc");
const transactionFeesUsd = table.querySelector("#transaction-fees-usd");
const totalReceivedBtc = table.querySelector("#total-received-btc");
const totalReceivedUsd = table.querySelector("#total-received-usd");

// Fetch Data
const fetchData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

// Calculate Transaction
const calculateTransaction = () => {
  const amount = amountInput.value;
  const priority = priorityInput.value;
  const feesInSats = calculateFeesInSats(priority);
  const feeInBtc = feesInSats / 100_000_000;
  updateUI(amount, feeInBtc);
};

// Calculate Fees in Sats
const calculateFeesInSats = (priority) => {
  const fees = ["minimumFee", "economyFee", "hourFee", "halfHourFee", "fastestFee"];
  return transactionSizeInBytes * recommendedFees[fees[priority - 1]];
};

// Format Amount
const formatAmount = (num, maximumFractionDigits = 2) => {
  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits,
  });
  return formatter.format(num);
};

// Update UI
const updateUI = (amount, feeInBtc) => {
  transactionFeesBtc.textContent = `-${formatAmount(feeInBtc, 8)} BTC`;
  totalReceivedBtc.textContent = `${formatAmount(amount - feeInBtc, 8)} BTC`;
  if (bitcoinPrice !== 0) {
    const feeInUsd = feeInBtc * bitcoinPrice;
    amountUsd.textContent = `${formatAmount(amount * bitcoinPrice)} USD`;
    transactionFeesUsd.textContent = `-${formatAmount(feeInUsd)} USD`;
    totalReceivedUsd.textContent = `${formatAmount(amount * bitcoinPrice - feeInUsd)} USD`;
  }
};

// Set the priority style
const setPriorityStyle = () => {
  const { value, min, max } = priorityInput;
  const percent = ((value - min) / (max - min)) * 100;
  priorityInput.style.setProperty("--pico-selected-ratio", `${percent}%`);
};

// Handle Priority
const handlePriority = () => {
  setPriorityStyle();
  calculateTransaction();
};

// Handle Amount
const handleAmount = () => {
  calculateTransaction();
};

// Handle Priority Option
const handlePriorityOption = (event) => {
  priorityInput.value = event.target.value;
  setPriorityStyle();
  calculateTransaction();
};

// Listens for input changes
amountInput.addEventListener("input", handleAmount);
priorityInput.addEventListener("input", handlePriority);

// Fetch data and calculate transaction on load
(async () => {
  const prices = await fetchData("https://mempool.space/api/v1/prices");
  bitcoinPrice = prices.USD;
  recommendedFees = await fetchData("https://mempool.space/api/v1/fees/recommended");
  calculateTransaction();
})();

// Listen clicks on priority options
priorityOptions.forEach((option) => {
  console.log(option);
  option.addEventListener("click", handlePriorityOption);
});

// Set the priority style on load
setPriorityStyle();

// Prevent form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

// Focus and move cursor to the end of the input on load
(function focusAndMoveCursorToEnd(input) {
  input.focus();
  const value = input.value;
  input.value = "";
  input.value = value;
})(amountInput);
