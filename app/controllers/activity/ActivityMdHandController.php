<?php

class ActivityMdHandController extends AdminBaseController {

    /**
     * 资源模型名称
     * @var string
     */
    protected $modelName = 'ActivityHand';


    /**
     * 在渲染前执行，为视图准备变量
     */
    protected function beforeRender() 
    {
        parent::beforeRender();
   
    }

    public function index(){
        return parent::index();
    }
    
    /**
     * 资源创建页面
     * @return Response
     */
    public function create($id = null) {
        return parent::create($id);
    }
    
     public function view($id) {
        return parent::view($id);
    }
    
     public function edit($id) {
        return parent::edit($id);
    }
    
     public function destroy($id) {
        return parent::destroy($id);
    }
    
}
