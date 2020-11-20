import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { NO_ERRORS_SCHEMA } from '@angular/core'
import { RecordPreviewTitleComponent } from './record-preview-title.component'

describe('RecordPreviewTextComponent', () => {
  let component: RecordPreviewTitleComponent
  let fixture: ComponentFixture<RecordPreviewTitleComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecordPreviewTitleComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordPreviewTitleComponent)
    component = fixture.componentInstance
    component.record = {
      id: '139',
      uuid: 'd2f30aa4-867e-40b9-9c37-3cb21f541008',
      title: 'abcd',
      abstract: 'Abcd',
      metadataUrl: '/abcd.html',
      thumbnailUrl: '/abcd.jpg',
    }
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
