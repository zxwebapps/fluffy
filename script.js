public static List<Review> listReviews(String locationName) throws Exception {
    Mybusiness.Accounts.Locations.Reviews.List reviewsList =
      mybusiness.accounts().locations().reviews().list(locationName);
    ListReviewsResponse response = accountsList.execute();
    List<Reviews> reviews = response.getReviews();
  
    for (Reviews review : reviews) {
      System.out.println(review.toPrettyString());
    }
    return reviews;
  }