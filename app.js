let Vimeo = require("vimeo").Vimeo;

const dotenv = require("dotenv");

dotenv.config();
console.log(process.env.unauth_acess_token);

let client = new Vimeo(
  process.env.client_id,
  process.env.client_secret,
  // process.env.access_token
  process.env.new_access_token
  // process.env.unauth_acess_token
);

client.request(
  {
    method: "GET",
    path: "/tutorial",
  },
  function (error, body, status_code, headers) {
    if (error) {
      console.log(error);
    }

    console.log(body);
  }
);
// var scopes, token;
// const redirect_uri = "https://beta.somoyinfo.com";

// client.generateClientCredentials(
//   ["public", "upload", "video_files"],
//   function (err, response) {
//     if (err) {
//       throw err;
//     }

//     token = response.access_token;

//     // console.log(token);

//     // Other useful information is included alongside the access token,
//     // which you can dump out to see, or visit our API documentation.
//     //
//     // We include the final scopes granted to the token. This is
//     // important because the user, or API, might revoke scopes during
//     // the authentication process.
//     scopes = response.scope;
//     // console.log(scopes);
//   }
// );

// var url = client.buildAuthorizationEndpoint(
//   "https://beta.somoyinfo.com",
//   scopes,
//   "test123*"
// );

// client.accessToken("abc", redirect_uri, function (err, response) {
//   // if (err) {
//   //   return response.end("error\n" + err);
//   // }

//   if (token) {
//     // At this state the code has been successfully exchanged for an
//     // access token
//     client.setAccessToken(token);

//     // Other useful information is included alongside the access token,
//     // which you can dump out to see, or visit our API documentation.
//     //
//     // We include the final scopes granted to the token. This is
//     // important because the user, or API, might revoke scopes during
//     // the authentication process.
//     // var scopes = response.scope;
//     // console.log(scopes);

//     // // We also include the full user response of the newly
//     // // authenticated user.
//     // var user = response.user;
//     // console.log(user);
//   }
// });

// let file_name = "/home/sayburgh/Downloads/SampleVideo_1280x720_2mb.mp4";
// client.upload(
//   file_name,
//   {
//     name: "sample video",
//     description: "The description goes here.",
//   },
//   function (uri) {
//     console.log("Your video URI is: " + uri);
//   },
//   function (bytes_uploaded, bytes_total) {
//     var percentage = ((bytes_uploaded / bytes_total) * 100).toFixed(2);
//     console.log(bytes_uploaded, bytes_total, percentage + "%");
//   },
//   function (error) {
//     console.log("Failed because: " + error);
//   }
// );

// // client.request(
// //   /*options*/ {
// //     // This is the path for the videos contained within the staff picks
// //     // channels
// //     path: "https://vimeo.com/manage/videos",
// //     // This adds the parameters to request page two, and 10 items per
// //     // page
// //     query: {
// //       page: 1,
// //       per_page: 1,
// //       fields: "uri,name,description,duration,created_time,modified_time",
// //     },
// //   },
// //   /*callback*/ function (error, body, status_code, headers) {
// //     if (error) {
// //       console.log("error");
// //       console.log(error);
// //     } else {
// //       console.log("body");
// //       console.log(body);
// //     }

// //     console.log("status code");
// //     console.log(status_code);
// //     console.log("headers");
// //     console.log(headers);
// //   }
// // );

// // get the https link of the video
// client.request(
//   "/videos/499613358" + "?fields=link",
//   function (error, body, statusCode, headers) {
//     if (error) {
//       console.log("There was an error making the request.");
//       console.log("Server reported: " + error);
//       return;
//     }

//     console.log(`your status code id ${statusCode}`);
//     console.log("Your video link is: " + body.link);
//     // console.log("Your video name is: " + body.name);
//   }
// );
