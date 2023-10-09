// ReviewsPage.jsx

import UserReview from './UserReview';

const ReviewsPage = () => {
    const reviewsData = [
        {
            userAvatar: 'https://i.ibb.co/hDqYHDR/female-wedding-planner-working-ceremony.jpghttps://i.ibb.co/82MJhkT/young-bearded-man-with-striped-shirt.jpg',
            userName: 'John Doe',
            date: 'October 7, 2023',
            rating: 4,
            comment: 'The event was fantastic! Everything was so well organized and I had a blast.'
        },
        {
            userAvatar: 'https://i.ibb.co/tJtC0F1/close-up-bearded-tired-man.jpg',
            userName: 'Jane Smith',
            date: 'September 25, 2023',
            rating: 5,
            comment: 'Loved every bit of the event! Kudos to the team for pulling off such a seamless experience.'
        },
        {
            userAvatar: 'https://i.ibb.co/MfMLGgy/close-up-portrait-curly-handsome-european-male.jpg',
            userName: 'Alice Johnson',
            date: 'October 3, 2023',
            rating: 3,
            comment: 'The event was good, but I felt it could have been a bit more interactive. Looking forward to the next one!'
        },
        {
            userAvatar: 'https://i.ibb.co/2Stcczd/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg',
            userName: 'Bob Williams',
            date: 'October 5, 2023',
            rating: 4.5,
            comment: 'Great event! The sessions were informative, and the networking opportunities were invaluable.'
        },
        {
            userAvatar: 'https://i.ibb.co/0KqtGJD/smiling-pretty-woman-posing-camera-park.jpg',
            userName: 'Charlie Brown',
            date: 'September 29, 2023',
            rating: 2,
            comment: 'The event was not up to the mark for me. The sessions felt rushed and lacked depth.'
        },
        {
            userAvatar: "https://i.ibb.co/27m39ZJ/portrait-young-attractive-man-checkered-shirt-calmly-looks-camera-stands-pink-background.jpg",
            userName: "Emily Clark",
            date: "October 8, 2023",
            rating: 4.7,
            comment: "This was my first time attending an event organized by this team, and I must say I'm impressed. Well-coordinated and executed!"
        }
    ];
    

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">User Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {reviewsData.map((review, index) => (
                <UserReview key={index} review={review} />
            ))}
            </div>
        </div>
    );

}

export default ReviewsPage;
