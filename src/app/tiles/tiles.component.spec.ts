import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesComponent } from './tiles.component';

describe('TilesComponent', () => {
  let component: TilesComponent;
  let fixture: ComponentFixture<TilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call ngOnInit',()=>{
    spyOn(component,'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });
  it(('should call fetchItemList'),()=>{
    spyOn(component,'fetchItemList').and.callThrough();
    component.fetchItemList();
  })
});
