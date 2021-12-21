const Loading = document.querySelector('.loading-text');
const bg =document.querySelector('.bg');

let load = 0

let int = setInterval(blurring, 30);

const scale = (value, v_max, v_min, max, min) =>{
  return ( (value-v_min)*(max-min) / (v_max-v_min) + min );
}



function blurring() {
  load++
  const max = 100
  const min = 0

  if (load >= max) {
    clearInterval(int)
  }

  Loading.innerText = `${load}%..`
  Loading.style.opacity = scale( load, max , min, 0, 1 )
  bg.style.filter = `blur(${scale( load, max , min, 0, 30 )}px)`
}