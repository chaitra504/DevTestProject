 import { TestBed,ComponentFixture } from "@angular/core/testing";
 import { BrowserModule,By } from "@angular/platform-browser";
 import { FormsModule,ReactiveFormsModule} from "@angular/forms";
 import { DebugElement } from "@angular/core";
 import { AngularTestComponent } from "./angular-test.component";
  import { RouterTestingModule } from '@angular/router/testing';
 
 
// describe('AngularTestComponent',()=>{
// let comp: AngularTestComponent;
// let fixture: ComponentFixture<AngularTestComponent>;
// let de:DebugElement;
// let el: HTMLElement;

// beforeEach(()=>{
//     TestBed.configureTestingModule({
//         declarations:[AngularTestComponent],
//     }).compileComponents();
//     // .then(()=>{
//     //     fixture = TestBed.createComponent(AngularTestComponent);
//     //     comp = fixture.componentInstance;
//     //     //debugelement is javascript object . its Angular method
//     //     de = fixture.debugElement.query(By.css('form'));
//     //     //it gives DON tree
//     //     el = de.nativeElement;
//     // });
// });

// it(`should have as text 'content page'`,()=>{
//     expect(comp.text).toEqual('contact page');
//   });

//   it('should set submitted to true',()=>{
//       comp.onSubmit();
//       expect(comp.submitted).toBeTruthy();
//   });
// });

describe('AngularTestComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AngularTestComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AngularTestComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'product'`, () => {
    const fixture = TestBed.createComponent(AngularTestComponent);
    const app = fixture.componentInstance;
    expect(app.text).toEqual('content page');
  });

  it(`should have as text 'content page'`,()=>{
    const fixture = TestBed.createComponent(AngularTestComponent);
    const app = fixture.componentInstance;
        expect(app.text).toEqual('contact page');
       });
    
       it('should set submitted to true',()=>{
        const fixture = TestBed.createComponent(AngularTestComponent);
        const app = fixture.componentInstance;   
        app.onSubmit();
           expect(app.submitted).toBeTruthy();
       });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AngularTestComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('.content span')?.textContent).toContain('product app is running!');
//   });
});
