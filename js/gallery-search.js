  $(document).ready(function () {
    $('.gallery-search__form__form-block__dropdown_button').click(function (e) {
      e.preventDefault();
      $(this).next('.gallery-search__form__form-block__dropdown__content').show();
    });

  //   $('.gallery-search__form__form-block__dropdown_button').mouseleave(function () { 
  //     $(this).next('.gallery-search__form__form-block__dropdown__content').hide();
  // }); 
    });