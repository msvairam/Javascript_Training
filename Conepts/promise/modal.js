const input = document.createElement('input');

const state =  {  value: 'Hi'};

modal(state, input);

function modal(state, input) {

    input.value = state.value;
    
    Object.defineProperty(state, 'value', {
        get() {
            return input.value;
        },
        set(val) {
            input.value =  val;
            return;
        }
    })

    input.addEventListener('change', (e) => {
        state.value =  e.target.value;
    })

}

console.log(input.value);

state.value = 'dev';

console.log(input.value);

input.value = 'production';

input.dispatchEvent(new Event('change'));

console.log(state.value);
