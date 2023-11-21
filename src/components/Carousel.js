function Carousel() {
  return (
    <div style={{'width':'100%'}} id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img style={{'height':'500px'}} src="imageone.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img style={{'height':'500px'}} src="imagetwo.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img style={{'height':'500px'}} src="imagethree.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
