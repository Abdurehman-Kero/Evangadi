import $ from "jquery";

const AccordionHandler = () => {
  function attachToggle() {
    if ($(window).width() <= 768) {
      // Mobile mode: enable toggle
      $(".footer-links-wrapper h3")
        .off("click")
        .on("click", function () {
          $(this).next("ul").slideToggle();
          $(this).find(".icon").toggleClass("iconRotator");
        });

      // Initially hide all sections
      $(".footer-links-wrapper ul").hide();
      $(".footer-links-wrapper h3 .icon").removeClass("iconRotator");
    } else {
      // Desktop mode: show all, no toggle
      $(".footer-links-wrapper ul").show();
      $(".footer-links-wrapper h3").off("click");
      $(".footer-links-wrapper h3 .icon").removeClass("iconRotator");
    }
  }

  attachToggle();
  $(window).on("resize", attachToggle);
};

export default AccordionHandler;
