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

        courses:[
            {
                preview:'assets/img/course-02-480x298.jpg',
                price:40.00,
                description:'learning to write as a professional author',
                n0fLessons:20,
                students:50
            },
            {
                preview:'assets/img/stock-full-hd-03-480x298.jpg.',
                price:'free',
                description:'customer-centric info-tech strategies',
                n0fLessons:24,
                students:769
            },
            {
                preview:'assets/img/stock-full-hd-04-480x298.jpg',
                price:19.00,
                description:'open programming courses for everyone:pyton',
                n0fLessons:17,
                students:62
            },
            {
                preview:'assets/img/stock-full-hd-06-480x298.jpg',
                price:26.00,
                description:'academic listening and note-talking',
                n0fLessons:14,
                students:67
            },
            {
                preview:'assets/img/course-featured-image-01-480x298.jpg',
                price:39.00,
                description:'master jQuerry in a Short period of time',
                n0fLessons:6,
                students:51
            },
            {
                preview:'assets/img/stock-full-hd-05-480x298.jpg',
                price:59.00,
                description:'introduction to Javascript for Beginners',
                n0fLessons:14,
                students:76
            }

        ],
        statistics:[{
                finished:1.926,
                enrolled:3.092,
                istructors:200,
                satisfactionRate:100
            }],
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