import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'p2-theme',
  imports: [ReactiveFormsModule, FormsModule],
  template: `
    <form class="container mt-4" (ngSubmit)="save()">
      @for (prop of settings; track prop.var) {
        <div class="mb-2">
          <label [for]="prop.var">{{prop.label}}</label>
          <input [id]="prop.var" type="text" class="form-control" [formControl]="prop.control" placeholder="Hex code" />
        </div>
      }

      <div class="mb-2">
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="ms-2 btn btn-secondary" (click)="reset()">Reset</button>
      </div>
    </form>
  `,
  styles: ``
})
export class ThemeComponent {
  readonly fb = inject(FormBuilder);
  readonly settings = [
    {
      label: 'Navbar Color',
      var: '--navbar-color',
      control: this.fb.control(''),
    },
    {
      label: 'Header Color',
      var: '--heading-color',
      control: this.fb.control(''),
    },
    {
      label: 'Donate Button Background Color',
      var: '--donate-btn-background-color',
      control: this.fb.control(''),
    },
    {
      label: 'Donate Button Border Color',
      var: '--donate-btn-border-color',
      control: this.fb.control(''),
    },
    {
      label: 'Background color',
      var: '--background-color',
      control: this.fb.control(''),
    },
    {
      label: 'Text background color',
      var: '--text-background-color',
      control: this.fb.control(''),
    },
    {
      label: 'Candidate names background color',
      var: '--names-background-color',
      control: this.fb.control(''),
    }
  ];

  constructor() {
    this.settings.forEach((setting) => {
      const value = window.localStorage.getItem(setting.var);
      if (value) {
        setting.control.setValue(value);
      }
    });
    this.update();
  }

  save() {
    this.settings.forEach((setting) => {
      const value = setting.control.value;
      if (value) {
        window.localStorage.setItem(setting.var, value);
      } else {
        window.localStorage.removeItem(setting.var);
      }
    });
    this.update();
  }

  reset() {
    this.settings.forEach((setting) => {
      setting.control.setValue('');
      window.localStorage.removeItem(setting.var);
    });
    this.update();
  }

  private update() {
    this.settings.forEach((setting) => {
      const value = setting.control.value;
      if (value) {
        document.documentElement.style.setProperty(setting.var, value);
      } else {
        document.documentElement.style.removeProperty(setting.var);
      }
    });
  }
}
