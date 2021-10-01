import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[myfor]',
})
export class ForDirective implements OnInit {
  @Input('myforEm') numbers: number[] = [];
  @Input('myforOutroParametro') nome: string = '';

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    console.log(this.numbers);
    console.log(this.nome);

    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number });
    }
  }
}
