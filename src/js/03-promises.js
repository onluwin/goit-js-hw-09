import { Notify } from 'notiflix/build/notiflix-notify-aio';
const formRef = document.querySelector('form');
const delayInputRef = document.querySelector('input[name="delay"]');
const stepInputRef = document.querySelector('input[name="step"]');
const amountInputRef = document.querySelector('input[name="amount"]');

let position = 0;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  // console.log('position ->', position, 'delay ->', delay);
  
  return new Promise((resolve, reject) => {
    const timerId = setTimeout(() => {
      if (shouldResolve) {
    resolve({position, delay})
  } else {
    reject({position, delay})
  }
    }, delay);
  })
}

function onFormSubmit (e) {
  e.preventDefault();

  let delayStep = Number(stepInputRef.value)
  let delay = Number(delayInputRef.value) - delayStep;
  for (let i = 0; i < Number(amountInputRef.value); i += 1) {
  position += 1;
  delay += Number(stepInputRef.value);
    createPromise(position, delay).then(({ position, delay }) => { Notify.success(`Fulfilled promise ${position} in ${delay}`) }).catch(({ position, delay }) => {
      Notify.failure(`Rejected promise ${position} in ${delay}`)
    })
    
}
}

formRef.addEventListener('submit', onFormSubmit)