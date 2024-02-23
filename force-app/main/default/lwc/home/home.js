import { LightningElement, track } from "lwc";

export default class Home extends LightningElement {
  @track isScrolled = false;

  renderedCallback() {
    this.setUpScrollListener();
  }

  setUpScrollListener() {
    const callback = () => {
      this.isScrolled = window.scrollY > 0;
    };

    window.addEventListener("scroll", callback);

    this.addEventListener("destroy", () => {
      window.removeEventListener("scroll", callback);
    });
  }

  get headerClasses() {
    return `header ${this.isScrolled ? "header-scrolled" : ""}`;
  }
}
