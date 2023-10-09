const UserReview = ({ review }) => {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md p-6 space-y-4">
            <div className="flex items-center">
                <img className="h-12 w-12 rounded-full mr-4" src={review.userAvatar} alt={review.userName} />
                <div>
                    <h4 className="text-lg font-semibold">{review.userName}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                </div>
            </div>
            <div>
               
                <p className="mt-4 text-gray-700">{review.comment}</p>
            </div>
        </div>
    );
}

export default UserReview;
