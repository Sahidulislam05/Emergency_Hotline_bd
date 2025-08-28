# JavaScript DOM Questions & Answers 

## 1. Difference between getElementById, getElementsByClassName, and uerySelector / querySelectorAll

- getElementById("id") 
   → এটি নির্দিষ্ট id দিয়ে element সিলেক্ট করতে ব্যবহৃত হয়। সবসময় একটি মাত্র element return করে।

- getElementsByClassName("class") 
   → একই class নাম থাকা একাধিক element কে return করে। এটা একটি _HTMLCollection_ দেয় (array-এর মতো, কিন্তু পুরোপুরি array না)।

- querySelector("css-selector") 
   → CSS selector ব্যবহার করে প্রথম যে element মেলে সেটাকে return করে।

- querySelectorAll("css-selector") 
   → CSS selector ব্যবহার করে সবগুলো matching element return করে। এটা একটি _NodeList_ দেয় (for...of loop ব্যবহার করা যায়)।

---

## 2. How do you create and insert a new element into the DOM?

1. Element তৈরি করা → document.createElement("tagName")
2. Content বসানো → element.textContent = "Sahidul Islam" বা element.innerHTML = "<b>Sahidul Islam</b>"
3. DOM-এ যোগ করা → parent.appendChild(element) → parent এর শেষে যোগ হবে। parent.insertBefore(element, referenceElement) → parent এর মধ্যে reference element এর আগে ঢুকবে।

Example:

const newDiv = document.createElement("div");
newDiv.textContent = "Hi, I am Sahidul Islam!";
document.body.appendChild(newDiv);

## 3. What is Event Bubbling and how does it work?

যখন কোনো child element এ event ঘটে, সেটা parent → grandparent → document পর্যন্ত উপরে উঠতে থাকে।

এটাকে Event Bubbling বলা হয়।

উদাহরণ:
যদি একটা button এর উপর click event থাকে, সেই সাথে তার parent div এর উপরও click event থাকে → button এ click করলে আগে button এর event trigger হবে, তারপর div এর event trigger হবে।

## 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation মানে হলো parent element এর উপরে event listener বসানো, যাতে তার child element এর events ধরা যায়।

এটা কাজ করে কারণ event bubbling এর মাধ্যমে child → parent এ যায়।

Why Useful?

কম event listener ব্যবহার করা যায় → performance ভালো হয়।

নতুন dynamically যোগ হওয়া child element এর event আলাদা করে bind করতে হয় না, auto কাজ করতে পারে।

## 5. Difference between preventDefault() and stopPropagation()

preventDefault()

Browser এর default কাজগুলো বন্ধ করে।

যেমন: কোনো form submit করলে page reload হওয়া বন্ধ করতে এটি ব্যবহৃত হয়

form.addEventListener("submit", function(e) {
  e.preventDefault();
});

stopPropagation()

Event bubbling বা capturing বন্ধ করে দেয়।

যার ফলশ্রুতিতে Child element এর event parent element এ গিয়ে trigger হবে না।

button.addEventListener("click", function(e) {
  e.stopPropagation();
});
