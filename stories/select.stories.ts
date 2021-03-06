import { storiesOf } from '@storybook/angular';
import { withKnobs, array, boolean, text, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { McSelectModule } from '@ptsecurity/mosaic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


storiesOf('Form Controls|Select', module)
    .addDecorator(withKnobs)
    .add('Default', () => ({
        /* tslint:disable:no-trailing-whitespace */
        template: `
        <h5 class="mc-title">With default parameters</h5>
        <div style="width: 200px">
            <mc-form-field style="width: 100%">
                <mc-select [(value)]="selected">
                    <mc-option value="Disabled" disabled>Disabled</mc-option>
                    <mc-option value="Normal">Normal</mc-option>
                    <mc-option value="Hovered">Hovered</mc-option>
                    <mc-option value="Focused">Focused</mc-option>
                    <mc-option value="Selected">Selected</mc-option>
                    <mc-option value="Selected1">Selected1</mc-option>
                    <mc-option value="Selected2">Selected2</mc-option>
                    <mc-option value="Selected3">Selected3</mc-option>
                    <mc-option value="Selected4">Selected4</mc-option>
                    <mc-option value="Selected5">Selected5</mc-option>
                    <mc-option value="Selected6">Selected6</mc-option>
                    <mc-option value="Selected7">Selected7</mc-option>
                    <mc-option value="Selected8">Selected8</mc-option>
                    <mc-option value="Selected9">Selected9</mc-option>
                    <mc-option value="Selected10">Selected10</mc-option>
                </mc-select>
            </mc-form-field>
        </div>

        <p class="mc-body">Selected: {{ selected }}</p>
        `,
        props: {
            selected: 'Hovered',
            onSelectionChange: action('selectionChange')
        },
        moduleMetadata: {
            imports: [McSelectModule, BrowserAnimationsModule]
        }
    }))
    .add('Multiselect', () => ({
        /* tslint:disable:no-trailing-whitespace */
        template: `
        <style>
            .dev-container {
                width: 300px;
                height: 140px;
            
                border: 1px solid red;
            
                padding: 24px;
            }
        </style>
        
        <h5 class="mc-title">With parameter multiple="true"</h5>
        <div class="dev-container">
            <mc-form-field>
                <mc-select multiple #select="mcSelect" [(value)]="multipleSelected">
                    <mc-option value="Disabled" disabled>Disabled</mc-option>
                    <mc-option value="Normal">Normal</mc-option>
                    <mc-option value="Hovered">Hovered</mc-option>
                    <mc-option value="Very very very very very very very very very very very long string">
                        Very very very very very very very very very very very long string
                    </mc-option>
                    <mc-option value="Selected">Selected</mc-option>
                    <mc-option value="Selected1">Selected1</mc-option>
                    <mc-option value="Selected2">Selected2</mc-option>
                    <mc-option value="Selected3">Selected3</mc-option>
                    <mc-option value="Selected4">Selected4</mc-option>
                    <mc-option value="FocusedFocusedFocusedFocusedFocusedFocusedFocusedFocusedFocusedFocused">
                        FocusedFocusedFocusedFocusedFocusedFocusedFocusedFocusedFocusedFocused
                    </mc-option>
                    <mc-option value="Selected6">Selected6</mc-option>
                    <mc-option value="Selected7">Selected7</mc-option>
                    <mc-option value="Selected8">Selected8</mc-option>
                    <mc-option value="Selected9">Selected9</mc-option>
                    <mc-option value="Selected10">Selected10</mc-option>
                </mc-select>
            </mc-form-field>
        </div>

        <p class="mc-body">Selected: {{ multipleSelected }}</p>
        `,
        props: {
            multipleSelected: ['Normal', 'Hovered', 'Selected', 'Selected1'],

            folders: object('folders', [
                { name: 'Photos' },
                { name: 'Recipes' },
                { name: 'Work' }
            ]),
            onSelectionChange: action('selectionChange')
        },
        moduleMetadata: {
            imports: [McSelectModule, BrowserAnimationsModule]
        }
    }));
