var profile_username = document.getElementsByClassName("profile_username")[0].innerText

document.getElementById("profile_followers").addEventListener("click", function () {
  showFollowersModal();
});

function showFollowersModal() {
  // Show the modal
  var modal = document.getElementById("followers-modal");
  modal.style.display = "block";

  // Get the list of followers from the server using AJAX
  $.ajax({
    url: `/profile_modal/${profile_username}`, //url to get the followers
    type: 'GET',
    success: function (response) {
      var followersList = document.getElementById("followers-list");
      followersList.innerHTML = "";

      // Loop through the list of followers and create elements for each one
      response.followers.forEach(function (follower, index) {
        var row = document.createElement("tr");
        var imageCell = document.createElement("td");
        var nameCell = document.createElement("td");
        var image = document.createElement("img");
        image.src = response.other_profile_images[index];
        var nameLink = document.createElement("a");
        nameLink.href = "/profile/" + follower;
        nameLink.innerText = follower;
        imageCell.appendChild(image);
        nameCell.appendChild(nameLink);
        row.appendChild(imageCell);
        row.appendChild(nameCell);


        document.getElementById("followers-list").appendChild(row);
      });
    }
  });
}



// Get the close button
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on the close button, hide the modal
closeBtn.onclick = function () {
  var modal = document.getElementById("followers-modal");
  modal.style.display = "none";
}







// The below function is for Finding out the User Profile's Following Names



document.getElementById("profile_following").addEventListener("click", function () {
  showFollowingModal();
});

function showFollowingModal() {
  // Show the modal
  var modal = document.getElementById("following-modal");
  modal.style.display = "block";

  // Get the list of followers from the server using AJAX
  $.ajax({
    url: `/profile_modal/${profile_username}`, //url to get the followers
    type: 'GET',
    success: function (response) {
      var followingList = document.getElementById("following-list");
      followingList.innerHTML = "";

      // Loop through the list of followers and create elements for each one
      response.following.forEach(function (following, index) {
        var row = document.createElement("tr");
        var imageCell = document.createElement("td");
        var nameCell = document.createElement("td");
        var image = document.createElement("img");
        image.src = response.following_profile_images[index];
        var nameLink = document.createElement("a");
        nameLink.href = "/profile/" + following;
        nameLink.innerText = following;
        imageCell.appendChild(image);
        nameCell.appendChild(nameLink);
        row.appendChild(imageCell);
        row.appendChild(nameCell);


        document.getElementById("following-list").appendChild(row);
      });
    }
  });
}



// Get the close button
var closeBtn = document.getElementsByClassName("close")[1];

// When the user clicks on the close button, hide the modal
closeBtn.onclick = function () {
  var modal = document.getElementById("following-modal");
  modal.style.display = "none";
}
