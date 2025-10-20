
// $(function () {
//   // Define the function that sets up the footer toggle behavior
//   function attachToggle() {
//     // If the screen width is 768px or less → mobile mode
//     if ($(window).width() <= 768) {
//       // Remove any old click events, then add a new click event on <h3>
//       $(".footer-links-wrapper h3")
//         .off("click")
//         .on("click", function () {
//           // Slide toggle (show/hide) the <ul> after this <h3>
//           $(this).next("ul").slideToggle();

//           // Toggle a CSS class to change the icon style (from + to ×)
//           $(this).toggleClass("iconRotator");
//         });

//       // On mobile, ensure all sections start closed (or you can choose to keep some open)
//       $(".footer-links-wrapper ul").hide();
//       $(".footer-links-wrapper h3").removeClass("iconRotator");
//     } else {
//       // Otherwise → desktop/tablet mode

//       // Always show all footer <ul> lists
//       $(".footer-links-wrapper ul").show();
//       // Remove any click events from <h3> (no collapsible behavior on desktop)
//       $(".footer-links-wrapper h3").off("click");
//       // Remove the rotation class on desktop
//       $(".footer-links-wrapper h3").removeClass("iconRotator");
//     }
//   }

//     attachToggle(); // Call the function immediately when the page loads

//   // Also call the function whenever the window is resized
//   // (so it switches between mobile and desktop behavior correctly)
//   $(window).resize(function () {
//     attachToggle();
//   });
// });




// Q1
// function job() {
//     return new Promise(function(resolve, reject) {
//         reject();
//         // resolve();
//     });
// }

// let promise = job();

// promise

// .then(function() {
//     console.log('Success 1');
// })

// .then(function() {
//     console.log('Success 2');
// })

// .then(function() {
//     console.log('Success 3');
// })

// .catch(function() {
//     console.log('Error 1');
// })

// .then(function() {
//     console.log('Success 4');
// });




// Q2
// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);
//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
// });

// job()

// Q3

function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

.then(function(data) {
    console.log(data);

    return job(true);
})

.then(function(data) {
    if (data !== 'victory') {
        throw 'Defeat';
    }

    return job(true);
})

.then(function(data) {
    console.log(data);
})

.catch(function(error) {
    console.log(error);

    return job(false);
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error);

    return 'Error caught';
})

.then(function(data) {
    console.log(data);

    return new Error('test');
})

.then(function(data) {
    console.log('Success:', data.message);
})

.catch(function(data) {
    console.log('Error:', data.message);
});