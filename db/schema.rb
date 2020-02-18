# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_18_072127) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "cart_items", force: :cascade do |t|
    t.integer "cart_id", null: false
    t.integer "shoe_id", null: false
    t.integer "quantity", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "size_idx"
    t.index ["cart_id", "shoe_id"], name: "index_cart_items_on_cart_id_and_shoe_id", unique: true
    t.index ["cart_id"], name: "index_cart_items_on_cart_id"
    t.index ["shoe_id"], name: "index_cart_items_on_shoe_id"
  end

  create_table "carts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "status", null: false
    t.index ["user_id"], name: "index_carts_on_user_id"
  end

  create_table "colors", force: :cascade do |t|
    t.string "color", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "genders", force: :cascade do |t|
    t.string "gender", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "items", force: :cascade do |t|
    t.integer "shoe_id", null: false
    t.integer "size", null: false
  end

  create_table "materials", force: :cascade do |t|
    t.string "material", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shoes", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "color_id", null: false
    t.integer "material_id", null: false
    t.integer "size_id", null: false
    t.integer "gender_id", null: false
    t.integer "style_id", null: false
    t.index ["color_id"], name: "index_shoes_on_color_id"
    t.index ["gender_id"], name: "index_shoes_on_gender_id"
    t.index ["material_id"], name: "index_shoes_on_material_id"
    t.index ["size_id"], name: "index_shoes_on_size_id"
    t.index ["style_id"], name: "index_shoes_on_style_id"
  end

  create_table "sizes", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "size", default: [], array: true
  end

  create_table "styles", force: :cascade do |t|
    t.string "style", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "cart_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
