import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Express Web Desk",
            "title": "RBI MPC Meeting Live Updates: Repo rate hiked by 50 bps to 5.40% - The Indian Express",
            "description": "RBI MPC Policy Live Updates, Repo Rate Hiked: The six-member Monetary Policy Committee (MPC) headed by Reserve Bank of India (RBI) Governor Shaktikanta Das hiked the repo rate by 50 bps to 5.40 per cent. Here's what the Indian central bank chief announced.",
            "url": "https://indianexpress.com/article/business/economy/rbi-monetary-policy-committee-mpc-live-updates-august-2022-meeting-outcome-shaktikanta-das-key-announcements-repo-rate-hike-crr-inflation-economy-gdp-8071908/",
            "urlToImage": "https://images.indianexpress.com/2022/08/Shaktikanta-Das-PTI-1200.jpg",
            "publishedAt": "2022-08-05T06:17:50Z",
            "content": "RBI MPC Monetary Policy Review Announcement Live Updates: The Reserve Bank of Indias (RBI) Monetary Policy Committee (MPC) on Friday hiked the repo rate by 50 basis points (bps) to 5.40 per cent with… [+5051 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Shift the focus! Prostate cancer may NOT always show urinary symptoms, finds study - Times of India",
            "description": "Cancer in all its forms is dangerous, especially if it gets diagnosed at a later stage, where it becomes incurable. As far as prostate cancer is concerned, it is one of the most common and concerning cancers in men. Reportedly, it is the second most frequent …",
            "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/shift-the-focus-prostate-cancer-may-not-always-show-urinary-symptoms-finds-study/photostory/93348853.cms",
            "urlToImage": "https://static.toiimg.com/photo/93348872.cms",
            "publishedAt": "2022-08-05T05:30:00Z",
            "content": "A study published by a team at the University of Cambridge shares that focusing on urinary symptoms can be misleading when it comes to diagnosing prostate cancer.\r\n“When most people think of the symp… [+497 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Shishir Gupta",
            "title": "India miffed at Colombo for allowing PLA satellite tracker ship in Hambantota - Hindustan Times",
            "description": "A Luyang class guided missile destroyer with Type 071 Landing Platform Dock (LPD) is also transiting the Indian Ocean and headed towards the Chinese base in Djibouti on the eastern seaboard of Africa. | World News",
            "url": "https://www.hindustantimes.com/world-news/india-miffed-at-colombo-for-allowing-pla-satellite-tracker-ship-in-hambantota-101659675982026.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/08/05/1600x900/china_tracking_ship_at_hambantota_1659676165527_1659676165707_1659676165707.png",
            "publishedAt": "2022-08-05T05:13:02Z",
            "content": "Under the cloak of a research and survey vessel, a Chinese Space and Satellite Tracking ship Yuan Wang 5 is headed towards China leased port of Hambantota in Sri Lanka on August 11 despite serious ob… [+2117 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "SpaceX launches South Korean spacecraft to moon - Associated Press",
            "description": "South Korea joined the stampede to the moon on Thursday with the launch of a lunar orbiter that will scout out future landing spots. The satellite launched b...",
            "url": "https://www.youtube.com/watch?v=JQWlvgSwn9c",
            "urlToImage": "https://i.ytimg.com/vi/JQWlvgSwn9c/hqdefault.jpg",
            "publishedAt": "2022-08-05T05:12:45Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Royal Enfield Hunter 350: walk-around, exhaust note and design details | OVERDRIVE - OVERDRIVE",
            "description": "The #Hunter350 is the third J-series product from #RoyalEnfield after the Meteor and Classic 350. It uses similar underpinnings as the two motorcycles but is...",
            "url": "https://www.youtube.com/watch?v=qUai-RiwH3s",
            "urlToImage": "https://i.ytimg.com/vi/qUai-RiwH3s/maxresdefault.jpg",
            "publishedAt": "2022-08-05T04:53:41Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Republic World"
            },
            "author": "Shikhar Mehrotra",
            "title": "OnePlus 10T with Snapdragon 8+ Gen 1 and 150W fast charging launched globally - Republic World",
            "description": "The OnePlus 10T comes with a 6.7-inch 120Hz Fluid AMOLED display that has a touch response rate of 360Hz. Read more details about the smartphone here.",
            "url": "https://www.republicworld.com/technology-news/mobile/oneplus-10t-with-snapdragon-8-gen-1-and-150w-fast-charging-launched-globally-articleshow.html",
            "urlToImage": "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/2ayfjgn4nimfwahe_1659673970.jpeg",
            "publishedAt": "2022-08-05T04:39:00Z",
            "content": "After launching a flagship smartphone earlier this year, OnePlus has launched yet another device called OnePlus 10T. It belongs to the 'T' series of smartphones by the company and takes after the One… [+2060 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Icccricketschedule.com"
            },
            "author": "https://www.facebook.com/TechnologyBlogs",
            "title": "India's Squad For The Asia Cup 2022 [Probable] - ICC CRICKET SCHEDULE",
            "description": "In this article, we will take you through India’s Probable Squad for the Asia Cup 2022.....",
            "url": "https://www.icccricketschedule.com/indias-squad-for-the-asia-cup-2022-probable/",
            "urlToImage": "https://www.icccricketschedule.com/wp-content/uploads/2022/08/India-t20-World-Cup.jpg",
            "publishedAt": "2022-08-05T04:36:40Z",
            "content": "Indias Squad for the Asia Cup 2022: The Asia Cup 2022 is just around the corner and the preparations for the six-nation tournament are already underway. The 15th edition of the Asia Cup will be playe… [+3664 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "News18"
            },
            "author": "Sports Desk",
            "title": "CWG 2022, India Day 8 Full Schedule: Complete List of Events And Updated Timings For August 5 - News18",
            "description": "CWG 2022 India Day 8 Full Schedule August 5: Check here the complete list of events Indian contingent will take part on the eighth day of the ongoing Commonwealth Games 2022 in Birmingham.",
            "url": "https://www.news18.com/news/sports/cwg-2022-india-full-schedule-day-8-august-5-commonwealth-games-results-medal-tally-wrestling-badminton-squash-hockey-athletics-birmingham-5691409.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/08/pv-sindhu-ap-165966515916x9.jpg",
            "publishedAt": "2022-08-05T04:33:00Z",
            "content": "Commonwealth Games 2022 Full List of India Schedule And Timings: Indias medal tally continues to grow after a superb seventh day of CWG 2022 in Birmingham. With six gold, seven silver and seven bronz… [+4041 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Market Live Updates: Indices trade higher, Nifty around 17,400; RBI raises interest rates by 50bps - Moneycontrol",
            "description": "Stock Market Live Updates: Metals, IT and PSU banks edged higher while the midcap and smallcap indices are also trading in the green.",
            "url": "https://www.moneycontrol.com/news/business/markets/market-live-updates-sgx-nifty-indicates-a-positive-opening-for-indian-indices-13-8956681.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2020/01/BSE_Sensex_Stocks_market-770x433.png",
            "publishedAt": "2022-08-05T04:30:43Z",
            "content": "August 05, 2022 / 09:57 AM IST\r\nZomato board rejects its EY valuation deriving from Blinkit deal:\r\nZomato’s board has decided to keep the fair value of its shares at Rs 70.76 apiece for the all-stock… [+535 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India Today"
            },
            "author": "IndiaToday.in",
            "title": "LIVE UPDATES: Rahul Gandhi attacks BJP, says 'India under dictatorship, democracy is dead' - India Today",
            "description": "Congress leader Rahul Gandhi, addressing a press conference ahead of the Congress party’s nationwide protest against unemployment and price rise on Friday, said that India is under dictatorship and the democracy has died. “India is witnessing the death of dem…",
            "url": "https://www.indiatoday.in/india/story/national-herald-case-live-updates-congress-sonia-gandhi-rahul-gandhi-ed-probe-congress-1983989-2022-08-05",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202208/Rahul_Gandhi-647x363.jpeg?YKlcXM11RNvch7ibZpyLcpOhpHBqK0CB",
            "publishedAt": "2022-08-05T04:30:00Z",
            "content": "Earlier on Tuesday, top Congress leaders deliberated on the party's strategy for the August 5 nationwide protest and PM House gherao. AICC general secretaries Mukul Wasnik, Ajay Maken, Avinash Pande … [+562 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Japan Calls For \"Immediate Cancellation\" Of China Military Drills - NDTV",
            "description": "Japan's prime minister on Friday condemned China's firing of ballistic missiles during military drills around Taiwan, calling them a \"serious problem that impacts our national security and the safety of our citizens\".",
            "url": "https://www.ndtv.com/world-news/japan-tells-china-to-immediately-cancel-military-drills-around-taiwan-3226482",
            "urlToImage": "https://c.ndtvimg.com/2022-08/a4atrdi_fumio-kishida-and-nancy-pelosi-afp_625x300_05_August_22.jpg",
            "publishedAt": "2022-08-05T03:38:58Z",
            "content": "Nancy Pelosi is in Tokyo for the final leg of an Asian tour.\r\nTokyo: Japan's prime minister on Friday condemned China's firing of ballistic missiles during military drills around Taiwan, calling them… [+1968 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Russian man marries Ukrainian partner in Hindu ceremony in Himachal Pradesh - Moneycontrol",
            "description": "Sergei Novikov and Elona Bramoka's story shows that love conquers all.",
            "url": "https://www.moneycontrol.com/news/trends/russian-man-marries-ukrainian-partner-in-hindu-ceremony-in-himachal-pradesh-8956781.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/08/russian-man-marries-ukrainian-partner-ImResizer-770x433.jpg",
            "publishedAt": "2022-08-05T03:27:21Z",
            "content": "Thousands of miles away from their warring countries, a Russian man and a Ukrainian woman tied the knot in a Hindu ceremony in Himachal Pradesh earlier this week.\r\nSergei Novikov, an Israeli citizen,… [+1280 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Quint"
            },
            "author": "Saima Andrabi",
            "title": "Garena Free Fire Redeem Codes for Today, 5 August 2022: How To Win Free Rewards - The Quint",
            "description": "The Garena Free Fire Redeem Codes for 5 August 2022 are available on the official website for the players to claim rewards and win free gifts and weapons.",
            "url": "https://www.thequint.com/tech-and-auto/tech-news/garena-free-fire-redeem-codes-for-today-5-august-2022-how-to-win-free-rewards-from-rewardffgarenacom",
            "urlToImage": "https://images.thequint.com/thequint%2F2022-07%2F419b0300-4e65-44d7-b2fc-cca3bd14dd1b%2Fgarena.jpg?rect=0%2C0%2C1440%2C756&w=1200&auto=format%2Ccompress&ogImage=true",
            "publishedAt": "2022-08-05T03:16:28Z",
            "content": "The popular battle royale game, Garena Free Fire, updates codes that can be redeemed daily. The 12-digit codes are alphanumeric, consisting of both letters and numbers. Registered players can utilise… [+595 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "13 Killed, 40 Injured In Thailand Nightclub Fire - NDTV",
            "description": "A fire tore through a Thai nightclub early Friday killing at least 13 people and injuring 40, a rescue services official said.",
            "url": "https://www.ndtv.com/world-news/13-killed-40-injured-in-thailand-nightclub-fire-3226532",
            "urlToImage": "https://i.ndtvimg.com/i/2018-03/police-generic-international-afp_650x400_41520126059.jpg",
            "publishedAt": "2022-08-05T03:06:00Z",
            "content": "At least 13 people were killed in the fire.\r\nBangkok: A fire tore through a Thai nightclub early Friday killing at least 13 people and injuring 40, a rescue services official said.\r\nThe blaze broke o… [+1688 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Emotional Akshay Kumar cries at sister's message for him on Superstar Singer 2 - Hindustan Times",
            "description": "Akshay Kumar got emotional as he received an audio message from his sister on the singing reality show, Superstar Singer 2. The actor was promoting his film Raksha Bandhan on the show.",
            "url": "https://www.hindustantimes.com/entertainment/tv/emotional-akshay-kumar-cries-at-sister-s-message-for-him-on-superstar-singer-2-101659665217373.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/08/05/1600x900/Collage_Maker-05-Aug-2022-08.30-AM_1659668481914_1659668498877_1659668498877.jpg",
            "publishedAt": "2022-08-05T03:03:48Z",
            "content": "Akshay Kumar's sister Alka Bhatia recently sent a sweet audio message for the actor, which made him emotional. He was a special guest on singing reality show Superstar Singer 2, during which he recei… [+1605 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Zoom"
            },
            "author": "TN National Desk",
            "title": "Every post was on sale, had a price tag: Ex-party colleague narrates ordeal during Partha Chatterjee's tenure - Times Now",
            "description": "Last month, the Enforcement Directorate recovered over 50 crore in cash and unaccounted assets from premises linked to now-suspended TMC leader and West Bengal Minister Partha Chatterjee.",
            "url": "https://www.timesnownews.com/india/every-post-was-on-sale-had-a-price-tag-ex-party-colleague-narrates-ordeal-during-partha-chatterjees-tenure-article-93359099",
            "urlToImage": "https://static.tnn.in/thumb/msid-93359099,imgsize-100,width-1280,height-720,resizemode-75/93359099.jpg",
            "publishedAt": "2022-08-05T02:23:58Z",
            "content": "NEET Result 2022 Live: NEET Answer Key, Result date, rank predictor, college predictor and latest updates"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "AP",
            "title": "US declares public health emergency over monkeypox outbreak - Times of India",
            "description": "US News: The public health emergency declaration comes as the Biden administration has faced criticism over Monkeypox vaccine availability. Clinics in major ci",
            "url": "https://timesofindia.indiatimes.com/world/us/us-declares-public-health-emergency-over-monkeypox-outbreak/articleshow/93359030.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-93359031,width-1070,height-580,imgsize-29840,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2022-08-05T02:16:00Z",
            "content": ""
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ETMarkets.com",
            "title": "Stocks in the news: Titan, Adani Enterprises, Paytm, Britannia, Yes Bank and Lupin - The Economic Times",
            "description": "Titan, M&M, Nykaa Paytm, Alkem Labs, Petronet LNG, NMDC, AB Fashion, Motherson Sumi Wiring, Fortis Healthcare, Pfizer, IRB Infra and UCO Bank are among the companies that will announce their earnings for the quarter ended June 2022.",
            "url": "https://economictimes.indiatimes.com/markets/stocks/news/stocks-in-the-news-titan-adani-enterprises-axis-bank-britannia-yes-bank-and-lupin/articleshow/93358766.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-93358777,width-1070,height-580,imgsize-112446,overlay-etmarkets/photo.jpg",
            "publishedAt": "2022-08-05T01:58:00Z",
            "content": "Nifty futures on the Singapore Exchange traded 51.5 points, or 0.30 per cent higher at 17,448.5, signaling that Dalal Street was headed for a positive start on Friday. Here are a dozen stocks which m… [+6607 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "IndiaGlitz.com"
            },
            "author": "IndiaGlitz",
            "title": "'Bimbisara' Review Live Updates - Telugu News - Telugu Cinema - IndiaGlitz",
            "description": "'Bimbisara' Review Live Updates",
            "url": "https://www.indiaglitz.com/kalyanram-bimbisara-review-live-updates-telugu-news-321630",
            "urlToImage": "https://1847884116.rsc.cdn77.org/telugu/news/bimbisara-live-updates-4-c39.jpg",
            "publishedAt": "2022-08-05T01:56:36Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Happy Birthday Kajol: How she fell in love with Ajay Devgn, convinced her dad - Hindustan Times",
            "description": "Kajol and Ajay Devgn got married in 1999 after dating each other for four years. The couple has two kids together- Nysa Devgan and Yug Devgan. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/happy-birthday-kajol-how-she-fell-in-love-with-ajay-devgn-convinced-her-dad-101659530400072.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/08/03/1600x900/Untitled_design_(41)_1659534212774_1659534222501_1659534222501.png",
            "publishedAt": "2022-08-05T01:15:41Z",
            "content": "Actors Kajol and Ajay Devgn's love story is no less than a fairytale. The two were labeled as an unlikely' pair because of their contrasting personalities. While Kajol was known for her bubbly and ta… [+2087 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a7c9229848bf4c4b9d988c02405a43d8";
        fetch(url).then((Response)=> Response.json()).then((data)=>{
            this.setState({articles: data.articles});
            // console.log(data);
        });
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>Top headlines</h2>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className='col-md-3 mx-3' key={element.url}>
                            <NewsItem title={element.title?element.title:" "} description={element.description?element.description:" "} imageUrl={element.urlToImage?element.urlToImage:" "} newsUrl={element.url?element.url:" "}/>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News