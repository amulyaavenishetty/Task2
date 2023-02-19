import { Injectable } from '@angular/core';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsOperationsService {

  constructor() { 
    let news1:News=new News('FPIs shift focus back on Indian market','BusinessNews','Foreign investors seem to have shifted their focus back on the Indian equity markets as they turned net buyers last week with an investment of over Rs 7,600 crore.','business1.jpg')
    let news2:News=new News('Sensex snaps 3-day winning run, sheds 317 pts','BusinessNews','CLOSING BELL: The NSE Nifty 50 slipped 92 points to settle at 17,944. L&T, Hero MotoCorp, UltraTech Cement bucked the trend, while Adani Group shares ended mixed on Friday.','business2.jpg')
    let news3:News=new News('Onwards and upwards!: Post-EC Sena order','Politics','With the Election Commission order dealing a comprehensive blow to the Thackerays, the BJP believes it has removed the one hurdle in its goal of achieving absolute majority on its own in the 2024 Assembly elections in Maharashtra.BI to Reissue Fresh Date as Manish Sisodia Asks for More Time on Summon','politics.jpg')
    let news4:News=new News('Hacked,thrashed!!','Crime','In An elderly man was brutally murdered by miscreants in front of his son in Marathahalli police station limits on Monday morning. ','crime.png')
    let news5:News=new News('Taliban ban use of contraception','World','This marks the latest attack on women’s rights by the Taliban who came to power in August 2021 after US troop withdrawal.','world.jpg')
    let news6:News=new News('S2FA authenticator apps for Android and iOS','Technology','SpaceX was required to submit the data to the agency at least seven days prior to an attempted launch','technology.jpg')
    let news7:News=new News('India vs Australia','Sports','India vs Australia: In a session where 10 wickets fell to spinners, technology and even snags in intervals were entertaining.','Sports.jpg')

    this.newsArr.push(news1)
    this.newsArr.push(news2)
    this.newsArr.push(news3)
    this.newsArr.push(news4)
    this.newsArr.push(news5)
    this.newsArr.push(news6)
    this.newsArr.push(news7)
  }

  newsArr:News[] = [];

  getNewsArr():News[]
  {
    return this.newsArr;
  }
  getNewsByCategory(filterCategory:string):News[]
  {

   let outputArr:News[] = [];

    this.newsArr.forEach(n=>{
      if(n.category == filterCategory)
      {
        outputArr.push(n);
      }
    });

    return outputArr;
  }
  getNewsByCategories(searchCategory:string):News
  {
    let outputNews:News = new News('','','','');
    for(let i=0;i<this.newsArr.length;i++)
    {
      let thisNews:News = this.newsArr[i];
        if(thisNews.category == searchCategory)
        {
          outputNews = thisNews;
          break;
        }
    }

    return outputNews;
  }
  }

