<?php

/**
 * @file
 * Theme settings form for Moto Comparo theme.
 */

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function moto_comparo_form_system_theme_settings_alter(&$form, &$form_state) {

  $form['moto_comparo'] = [
    '#type' => 'details',
    '#title' => t('Moto Comparo'),
    '#open' => TRUE,
  ];

  $form['moto_comparo']['font_size'] = [
    '#type' => 'number',
    '#title' => t('Font size'),
    '#min' => 12,
    '#max' => 18,
    '#default_value' => theme_get_setting('font_size'),
  ];

}
