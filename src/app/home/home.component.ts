import { Component, OnInit,ElementRef, HostListener} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  count: number = 0;
  isVisible: boolean = false;
 
  constructor(private elRef: ElementRef) { }
  count1: number = 0;
  count2:number=0;
  count3:number=0;
  count4:number=0;
   
   
   
    ngOnInit(): void {
   
    
      
    }
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.elRef.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
   
      if (scrollPosition >= componentPosition) {
        this.isVisible = true;
        this.startCount();
      }
    }
    startCount() {
   
      const interval = setInterval(() => {
        if (this.count1 < 65 ) {
          this.count1++;
   
        }
        else {
          clearInterval(interval);
        }
      },25);
       const interval2= setInterval(()=>{
        if(this.count2<85){
          this.count2++;
        }
        else{
          clearInterval(interval2);
        }
       },25)
       const interval3= setInterval(()=>{
        if(this.count3<35){
          this.count3++;
        }
        else{
          clearInterval(interval3);
        }
       },60)
       const interval4= setInterval(()=>{
        if(this.count4<20){
          this.count4++;
        }
        else{
          clearInterval(interval4);
        }
       },60)
    }
    // portfolioItems = [
    //   { image: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-1.jpg', category: 'app',name:'app1',position:'relative' },
    //   { image: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-4.jpg', category: 'card' ,name:'card1',position:'relative'},
    //   { image: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-2.jpg', category: 'web' ,name:'web1',position:'relative'},
    //   { image: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-3.jpg', category: 'app',name:'app2',position:'relative'},
    //   { image: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-7.jpg', category: 'card' ,name:'card2',position:'relative',left:'0',top:'0'},
    //   { image: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-5.jpg', category: 'web' ,name:'web2',position:'relative'},
    //   { image: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-6.jpg', category: 'app' ,name:'app3',position:'relative'},
    //   { image: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-8.jpg', category: 'card' ,name:'card3',position:'relative'},
    //   { image: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-9.jpg', category: 'web' ,name:'web3',position:'relative'},
    // ];
   
    // filteredCategory = 'all';
   
    // get visibleItems() {
    //   if (this.filteredCategory === 'all') {
    //     return this.portfolioItems;
    //   } else {
    //     return this.portfolioItems.filter(item => item.category === this.filteredCategory);
    //   }
    // }
   
    // filterItems(category: string) {
    //   this.filteredCategory = category;
    // }
}

