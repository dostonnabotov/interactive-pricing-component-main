const slider = document.getElementById('slider');
const price = document.getElementById('price');
const toggle = document.getElementById('toggle');
const period = document.getElementById('period');
const pageviews = document.getElementById('pageviews');

let mid_price = 16;

function checker() {
    switch (slider.value) {
        case '1':
            price.innerHTML = (mid_price / 2).toFixed(2);
            pageviews.innerHTML = '10K';
            break;
        case '2':
            price.innerHTML = (mid_price / 1.3333).toFixed(2);
            pageviews.innerHTML = '50K';
            break;
        case '3':
            price.innerHTML = (mid_price).toFixed(2);
            pageviews.innerHTML = '100K';
            break;
        case '4':
            price.innerHTML = (mid_price * 1.5).toFixed(2);
            pageviews.innerHTML = '500K';
            break;
        case '5':
            price.innerHTML = (mid_price * 2.25).toFixed(2);
            pageviews.innerHTML = '1M';
            break;
        default:
            break;
    }
}

toggle.addEventListener('change', () => {
    if (toggle.checked === true) {
        // 25% => 0.25, 25% discount => 0.75
        mid_price = (16 * 12) * 0.75;
        period.innerHTML = 'year'
    } else {
        mid_price = 16;
        period.innerHTML = 'month'
    }

    checker();
})

slider.addEventListener('input', checker);

