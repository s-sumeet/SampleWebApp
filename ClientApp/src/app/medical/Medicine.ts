export interface Medicine {
  isSelected: boolean;
  id: number;
  fullName: string;
  notes: string;
  expDate: string;
  quantity: number;
  isEdit: boolean;
}

export const MedicineColumns = [
  {
    key: 'isSelected',
    type: 'isSelected',
    label: '',
  },
  {
    key: 'fullName',
    type: 'text',
    label: 'Full Name',
    required: true,
  },
  {
    key: 'notes',
    type: 'text',
    label: 'Notes',
    required: true,
  },
  {
    key: 'quantity',
    type: 'email',
    label: 'Quantity',
    required: true,
  },
  {
    key: 'expDate',
    type: 'date',
    label: 'Exp Date',
    required: true,
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];
