import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'p2-theme',
  imports: [ReactiveFormsModule, FormsModule],
  template: `
    <form class="container mt-4" (ngSubmit)="save()">
      @for (prop of settings; track prop.var) {
        <div class="mb-2">
          <input #previewColor [id]="prop.var" type="color" class="me-2" [formControl]="prop.control" />
          <input type="text" class="me-2" style="width: 100px;text-align: center;" [formControl]="prop.control" placeholder="Hex code" (change)="updateColor(previewColor, prop.control.value)" />
          <label [for]="prop.var">{{prop.label}}</label>
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
      control: this.fb.control('#023047'),
    },
    {
      label: 'Header Color',
      var: '--heading-color',
      control: this.fb.control('#023047'),
    },
    {
      label: 'Donate Button Background Color',
      var: '--donate-btn-background-color',
      control: this.fb.control('#de5499'),
    },
    {
      label: 'Donate Button Border Color',
      var: '--donate-btn-border-color',
      control: this.fb.control('#0d6efd'),
    },
    {
      label: 'Background color',
      var: '--background-color',
      control: this.fb.control('#eddcd9'),
    },
    {
      label: 'Text background color',
      var: '--text-background-color',
      control: this.fb.control('#f2ebe9'),
    },
    {
      label: 'Candidate names background color',
      var: '--names-background-color',
      control: this.fb.control('#303179'),
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

  updateColor(target: HTMLInputElement, value: string | undefined | null) {
    if (value) {
      target.value = value;
    }
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
