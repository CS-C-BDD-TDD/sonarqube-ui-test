<template>
  <div id="message">
  <q-table
    title="Pending Messages"
    :data="tableData"
    :columns="columns"
    row-key="name"
  />

  </div>
</template>


<script>
export default {
  name: 'humanreview',
  data: () => ({
    columns: [
      {
        name: 'id',
        required: true,
        label: 'Stix Id',
        align: 'left',
        field: 'stixId',
        sortable: true,
       // classes: 'my-class',
        style: 'width: 20px'
      },
      {
        name: 'date',
        required: true,
        label: 'Action Date',
        align: 'left',
        field: 'actionDate',
        sortable: true,
      //  classes: 'my-class',
        style: 'width: 50px'
      },
      {
        name: 'type',
        required: true,
        label: 'Object Type',
        align: 'left',
        field: 'objectType',
        sortable: true,
     //   classes: 'my-class',
        style: 'width: 50px'
      },
      {
        name: 'field',
        required: true,
        label: 'Field',
        align: 'left',
        field: 'field',
        sortable: true,
    //    classes: 'my-class',
        style: 'width: 50px'
      },
      {
        name: 'value',
        required: true,
        label: 'Value',
        align: 'left',
        field: 'value',
        sortable: true,
    //    classes: 'my-class',
        style: 'width: 50px'
      },
      {
        name: 'status',
        required: true,
        label: 'Status',
        align: 'left',
        field: 'status',
        sortable: true,
   //     classes: 'my-class',
        style: 'width: 50px'
      },
      {
        name: 'action',
        required: true,
        label: 'Action',
        align: 'left',
        field: 'actions',
        sortable: true,
    //    classes: 'my-class',
        style: 'width: 50px'
      },
      {
        name: 'g-action',
        required: true,
        label: 'Group Action',
        align: 'left',
        field: 'groupAction',
        sortable: true,
    //    classes: 'my-class',
        style: 'width: 50px'
      },
    ],
    tableData: [
      {
        stixId: '1',
        actionDate: '09/15/2018',
        objectType: 'Indicator',
        field: 'Title',
        value: 'I contain a SSN',
        status: 'New',
        actions: 'Select Action',
        groupAction: 'Disseminate'
      },
      {
        stixId: '1',
        actionDate: '09/15/2018',
        objectType: 'Indicator',
        field: 'Description',
        value: 'I contain a name',
        status: 'New',
        actions: 'Select Action',
        groupAction: 'Disseminate'
      },
      {
        stixId: '2',
        actionDate: '09/18/2018',
        objectType: 'Indicator',
        field: 'Title',
        value: 'I contain a SSN: 123-45-6789',
        status: 'New',
        actions: 'Select Action',
        groupAction: 'Disseminate'
      },
      {
        stixId: '2',
        actionDate: '09/18/2018',
        objectType: 'Indicator',
        field: 'Description',
        value: '123 Massachusetts Ave, NW, Washington DC',
        status: 'New',
        actions: 'Select Action',
        groupAction: 'Disseminate'
      },
    ]
  })
}
</script>