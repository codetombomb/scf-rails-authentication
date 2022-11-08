class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.text :desc
      t.float :price
      t.boolean :sold
      t.references :seller
      t.references :buyer

      t.timestamps
    end
  end
end
