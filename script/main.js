// 탭 전환 
//탭 1,2 변수 설정
const tab1 = document.querySelector('.contents .tab1')//tab1
const tab2 = document.querySelector('.contents .tab2')//tab2
const gnb_a = document.querySelectorAll('.gnb a')
console.log(tab1,tab2)
console.log(gnb_a)
//메뉴 마우스 오버 이벤트
gnb_a.forEach((i,index)=>{
    console.log(i)
    i.addEventListener('mouseover',()=>{
        console.log(index)
        if(index%2 == 0){
            tab1.style.opacity = 1
        }
        else {
            tab1.style.opacity = 0
        }
    })
})