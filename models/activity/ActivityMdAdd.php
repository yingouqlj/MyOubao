<?php

/**
 * Class Activitys - 活动表
 *
 */
class ActivityMdAdd extends BaseModel {

    /**
     * The database table used by the model.
       `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL DEFAULT '' COMMENT '活动名称',
  `start_time` datetime DEFAULT NULL COMMENT '活动开始时间',
  `admin_id` int(11) NOT NULL COMMENT '管理员ID',
  `admin_name` varchar(16) NOT NULL,
  `end_time` datetime DEFAULT NULL COMMENT '活动结束时间',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
     * @var string
     */
    protected $table = 'activity_md';
//    public $orderColumns = ['status' => 'desc', 'id' => 'desc'];

    /**
     * 软删除
     * @var boolean
     */
//    protected $softDelete = false;
    protected $fillable = [
        'title',
        'start_time',
        'end_time',
        'created_at',
        'updated_at',
    ];
    public static $resourceName = 'ActivityMdAdd';

    /**
     * The columns for list page
     * @var array
     */
    public static $columnForList = [
         'title',
        'start_time',
        'end_time',
        'created_at',
        'updated_at',
    ];
    public static $titleColumn = 'id';
    public static $rules = [
        'title' => 'required',
        'start_time' => 'required',
        'end_time' => 'required',
    ];/**
     * 下拉列表框字段配置
     * @var array
     */
//    public static $htmlSelectColumns = [
//        'status' => 'aStatus',
//    ];



}
