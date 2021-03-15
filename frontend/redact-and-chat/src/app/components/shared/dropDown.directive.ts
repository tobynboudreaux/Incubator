import { Directive, HostBinding, HostListener } from "@angular/core";

//Manipulates anything about an element, in this case
// we're manipulating the class by toggling the open property
@Directive({
    selector: "[appDropDown]"
})
export class appDropDownDirective {
    @HostBinding("class.open") isOpen = false;

    @HostListener("click") toggleFunction() {
        this.isOpen = !this.isOpen;
    };
}