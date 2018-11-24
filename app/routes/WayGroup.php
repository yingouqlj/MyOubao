<?php

/**
 * WayGroup管理
 */
$sUrlDir = 'way-groups';
Route::group(['prefix' => $sUrlDir], function () {
    $resource = 'way-groups';
    $controller = 'WayGroupController@';
    Route::get('/index', array('as' => $resource . '.index', 'uses' => $controller . 'index'));
    Route::any('create/{parent_id?}',array('as' => $resource . '.create','uses' => $controller . 'create'));
    Route::get('{id}/view',array('as' => $resource . '.view','uses' => $controller . 'view'));
    Route::any('{id}/edit', array('as' => $resource . '.edit', 'uses' => $controller . 'edit')); // ->before('not.self');
    Route::delete('{id}', array('as' => $resource . '.destroy', 'uses' => $controller . 'destroy')); // ->before('not.self');
    Route::post('set-order',array('as' => $resource . '.set-order','uses' => $controller . 'setOrder'));
});