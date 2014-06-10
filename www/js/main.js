var app = angular.module("app", []);
    app.controller("mainCtrl", ["$scope", "$timeout", function($scope, $timeout){
    	

        $scope.l1_Items = [];
        $scope.l2_Items = [];

        $scope.listTotal_1 = 0;
        $scope.listTotal_2 = 0;
        
		
		$scope.addItem_1 = function(element){
            var list1 = document.getElementById(element.target.id);
            $scope.l1_Items.push({"content": $scope.l1_Item, "weigth": 1});
            $scope.totalWeight_1();
            $scope.l1_Item = "";
        }

        $scope.totalWeight_1 = function(){
            $scope.listTotal_1 = 0;
            for(i = 0 ; i < $scope.l1_Items.length ; i++){
                $scope.listTotal_1 += $scope.l1_Items[i]["weigth"];
            }
        }

        $scope.addWeigth_1 = function(index, element){
        	$scope.l1_Items[index]["weigth"] += 1;
        	$scope.totalWeight_1();
        }

       	$scope.remWeigth_1 = function(index, element){
        	$scope.l1_Items[index]["weigth"] -= 1;
        	$scope.totalWeight_1();
        }

        $scope.removeItem_1 = function (index) {
        	$scope.l1_Items.splice(index, 1);
        	$scope.totalWeight_1();
        }

        $scope.openEdit_1 = function(index){
        	$scope.editing = index;
        	$scope.editContent = $scope.l1_Items[index]["content"];
        }

        $scope.editContent_1 = function(index, newContent){
        	$scope.l1_Items[index]["content"] = newContent;
        	$scope.editing = null;
        }


        ///////////////////////////////////////////////////////////////////


		$scope.addItem_2 = function(element){
            var list2 = document.getElementById(element.target.id);
            $scope.l2_Items.push({"content": $scope.l2_Item, "weigth": 1});
            $scope.totalWeight_2();
            $scope.l2_Item = "";

        }

        $scope.totalWeight_2 = function(){
            $scope.listTotal_2 = 0;
            for(i = 0 ; i < $scope.l2_Items.length ; i++){
                $scope.listTotal_2 += $scope.l2_Items[i]["weigth"];
            }
        }

        $scope.addWeigth_2 = function(index, element){
        	$scope.l2_Items[index]["weigth"] += 1;
        	$scope.totalWeight_2();
        }

       	$scope.remWeigth_2 = function(index, element){
        	$scope.l2_Items[index]["weigth"] -= 1;
        	$scope.totalWeight_2();
        }

        $scope.removeItem_2 = function (index) {
        	$scope.l2_Items.splice(index, 1);
        	$scope.totalWeight_2();
        }

        $scope.openEdit_2 = function(index){
        	$scope.editing = index;
        	$scope.editContent = $scope.l2_Items[index]["content"];
        }

        $scope.editContent_2 = function(index, newContent){
        	$scope.l2_Items[index]["content"] = newContent;
        	$scope.editing = null;
        }


}])