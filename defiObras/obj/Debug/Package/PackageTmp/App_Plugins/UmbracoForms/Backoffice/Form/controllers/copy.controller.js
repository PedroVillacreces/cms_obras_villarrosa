angular.module("umbraco").controller("UmbracoForms.Editors.Form.CopyController",function ($scope, formResource, navigationService) {

    //console.log('currentNode', $scope.currentNode);
    //console.log('currentNode parent', $scope.currentNode.parent());

	    //Copy Function run from button on click
	    $scope.copyForm = function (formId) {
	        //console.log('Form ID to copy is'  + formId + 'with new name:' + $scope.newFormName);


	        //Perform copy in formResource
	        formResource.copy(formId, $scope.newFormName).then(function (response) {

	            //console.log('response', response);
	            //console.log('response.data', response.data);

	            var newFormId = response.data.id;

	            //Reload the tree (but do NOT mark the new item in the tree as selected/active)
	            navigationService.syncTree({ tree: "form", path: ["-1", String(newFormId)], forceReload: true, activate: false });

	            //Once 200 OK then reload tree & hide copy dialog navigation
	            navigationService.hideNavigation();
	        });
	    };

        //Cancel button - closes dialog
        $scope.cancelCopy = function() {
            navigationService.hideNavigation();
        }
	});