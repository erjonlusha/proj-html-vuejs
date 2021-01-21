// proj-html-vuejs


let app = new Vue ({
	el: "#app",
    data : {
        search:'',
        phrasesOfDay:[{
            phrase:"Let passion and determination be the guide along the way and develop at your own pace that's comfortable.",
            whoSay:"Fannie Moreno",
            whoIS:"/Founder & CEO"
        }],
        testimonials:[
            {
            photo:'assets/img/testimonial-avata-01.jpg',
            phrase:"I am free to learn at my own pace, follow my own schedule and choose th subject I like. Great study portal for people like me",
            whoSay:"Mina Hollance",
            whoIS:"/Freelancer"
        },
        {
            photo:'assets/img/testimonial-avata-02.jpg',
            phrase:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            whoSay:"Lorem Ipsum",
            whoIS:"/Freelancer"
        },
        {
            photo:'assets/img/testimonial-avata-03.jpg',
            phrase:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque exercitationem velit odio deleniti possimus reprehenderit, officia quos architecto debitis! Iste",
            whoSay:"Lorem Ipsum",
            whoIS:"/Freelancer"
        },
        {
            photo:'assets/img/testimonial-avata-04.jpg',
            phrase:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque exercitationem velit odio deleniti possimus reprehenderit",
            whoSay:"Lorem Ipsum",
            whoIS:"/Freelancer"
        },
        
    ],
        courses:[
            {
                preview:'background-image: url(assets/img/course-02-480x298.jpg);',
                price:'$40.00',
                description:'learning to write as a professional author',
                n0fLessons:20,
                students:50
            },
            {
                preview:'background-image: url(assets/img/stock-full-hd-03-480x298.jpg);',
                price:'free',
                description:'customer-centric info-tech strategies',
                n0fLessons:24,
                students:769
            },
            {
                preview:'background-image: url(assets/img/stock-full-hd-04-480x298.jpg);',
                price:'$19.00',
                description:'open programming courses for everyone:Pyton',
                n0fLessons:17,
                students:62
            },
            {
                preview:'background-image: url(assets/img/stock-full-hd-06-480x298.jpg);',
                price:'$26.00',
                description:'academic listening and note-talking',
                n0fLessons:14,
                students:67
            },
            {
                preview:'background-image: url(assets/img/course-featured-image-01-480x298.jpg);',
                price:'$39.00',
                description:'master jQuerry in a Short period of time',
                n0fLessons:6,
                students:51
            },
            {
                preview:'background-image: url(assets/img/stock-full-hd-05-480x298.jpg);',
                price:'$59.00',
                description:'introduction to Javascript for Beginners',
                n0fLessons:14,
                students:76
            }

        ],
        statistics:[
            {
                finished:1.926,
                enrolled:3.092,
                istructors:200,
                satisfactionRate:100
            }
        ],
        clients:[
            {
                logo:'assets/img/client-logo-colored-01.png',
                society:'AQUA'
            },
            {
                logo:'assets/img/client-logo-colored-02.png',
                society:'AdRoll'
            },
            {
                logo:'assets/img/client-logo-colored-03.png',
                society:'Foxy'
            },
            {
                logo:'assets/img/client-logo-colored-04.png',
                society:'Woodland'
            },
            {
                logo:'assets/img/client-logo-colored-05.png',
                society:'BullFit'
            },
            {
                logo:'assets/img/client-logo-colored-06.png',
                society:'SixbaSe'
            }
        ],
        ourBlogs:[
            {
                preview:'assets/img/artist-blog-01-480x325.jpg',
                artist:'Artist',
                articleTitle:'brush strokes energize trees in paintings',
                date:'May 15, 2020',
                views:688
            },
            {
                preview:'assets/img/artist-blog-02-480x325.jpg',
                artist:'Artist',
                articleTitle:'pocket-sized notebooks hold miniature paintings',
                date:'May 15, 2020',
                views:603
            },
            {
                preview:'assets/img/artist-blog-03-480x325.jpeg',
                artist:'Artist',
                articleTitle:'connection between self-portraits and identity',
                date:'May 15, 2020',
                views:397
            },
        ],
        address:'382 NE 191st St # 87394 Miami, FL 33179-3899',
        contactNumber:'+1(305) 547-9909',
        openingHours:'9am - 5pm EST, Monday - Friday',
        emailSupport:'support@maxcoach.com',
        socials:['fab fa-facebook-square', 'fab fa-twitter','fab fa-instagram', 'fab fa-linkedin'],

        menu:['home', 'pages', 'courses', 'features', 'blog', 'shop'],
        logo:'assets/img/light-logo.png',
        screenShot:'assets/img/home-6-hero-poster-final.jpg',
        heroLeft:'assets/img/home-6-hero-left-person.png',
        heroRight:'assets/img/home-6-hero-right-person.png',
    },
    mounted () {},
    methods:{}

});