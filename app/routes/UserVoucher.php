<?php

/**
 * UserVoucher 用户代金券
 */
$sUrlDir = 'user-vouchers';
Route::group(['prefix' => $sUrlDir], function () {
    $resource = 'user-vouchers';
    $controller = 'UserVoucherController@';
    Route::get(           '/', ['as' => $resource . '.index',   'uses' => $controller . 'index']);
     Route::get(   '{id}/view', ['as' => $resource . '.view',    'uses' => $controller . 'view']);
     Route::any(   '{id}/edit', ['as' => $resource . '.edit',    'uses' => $controller . 'edit']);
     Route::delete(     '{id}', ['as' => $resource . '.destroy', 'uses' => $controller . 'destroy']);
});
